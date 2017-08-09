import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

class TextFields extends Component {
  state = {
    income: 0,
    expenses: 0
  };
  render() {
    return (
      <Card>
        <CardContent>
          <div>
            <TextField
              label="Income"
              type="number"
              value={this.state.income}
              onChange={event => this.setState({ income: event.target.value })}
              margin="normal"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <TextField
              label="Expenses"
              type="number"
              value={this.state.expenses}
              onChange={event =>
                this.setState({ expenses: event.target.value })}
              margin="normal"
              style={{ width: '100%' }}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button>Calculate</Button>
        </CardActions>
      </Card>
    );
  }
}

export default TextFields;