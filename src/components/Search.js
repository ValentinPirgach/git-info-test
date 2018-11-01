import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Icon, Input, Button } from 'antd'

const FormItem = Form.Item;


class Search extends Component {
  static propTypes = {
    form: PropTypes.shape({
      getFieldDecorator: PropTypes.func.isRequired,
      getFieldsError: PropTypes.func.isRequired,
      isFieldTouched: PropTypes.func.isRequired,
      getFieldError: PropTypes.func.isRequired,
      validateFields: PropTypes.func.isRequired,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  get userNameError() {
    const { isFieldTouched, getFieldError } = this.props.form
    return isFieldTouched('userName') && getFieldError('userName')
  }

  get fieldDecorator() {
    return this.props.form.getFieldDecorator('userName', {
      rules: [{ required: true, message: 'Please input username' }],
    })
  }

  get hasErrors() {
    const fieldsError = this.props.form.getFieldsError()
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={this.userNameError ? 'error' : ''}
            help={this.userNameError || ''}>
            {this.fieldDecorator(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={this.hasErrors}
            >
              <Icon type="search" />
            </Button>
          </FormItem>
        </Form>
      </Wrapper>
    );
  }
}

export default Form.create()(Search);


const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`
