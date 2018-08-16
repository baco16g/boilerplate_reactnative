import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ComponentEnhancer, compose } from 'recompose'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { $Call } from 'utility-types'
import { IRootState } from '../reducers'
import * as counterActions from '../actions/counter'
import { Card, CardSection, Button } from '../components/common'

interface IState {
  count: number
}

interface IProps
  extends $Call<typeof mapDispatchToProps>,
    $Call<typeof mapStateToProps>,
    IState {}

const Counter = ({ count, actions }: IProps) => {
  const { textStyle, buttonStyle } = styles
  return (
    <Card>
      <CardSection>
        <View style={{ flex: 1 }}>
          <Text style={textStyle}>{count}</Text>
          <View style={buttonStyle}>
            <Button onPress={() => actions.increment()}>
              <Text>INCREMENT</Text>
            </Button>
          </View>
          <View style={buttonStyle}>
            <Button onPress={() => actions.asyncIncrement(null)}>
              <Text>ASYNC INCREMENT</Text>
            </Button>
          </View>
        </View>
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 32,
    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: 6
  }
})

const mapStateToProps = (state: IRootState) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      ...bindActionCreators(counterActions, dispatch)
    }
  }
}

const enhancer: ComponentEnhancer<IProps, {}> = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhancer(Counter)
