import React, { Component } from "react";
import { Form, Input, Button, Rate } from "antd";
import "../Order/OrderForm.css";

class FeedbackForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const data = {
          clientId: this.props.clientId,
          companyId: this.props.companyId,
          rate: values.rate,
          feedback: values.feedback
        };
        this.props.leaveFeedback(data, this.props.history);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="sign-up__content">
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="sign-up__title">Leave feedback</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="Company">
                {getFieldDecorator("company", {
                  initialValue: this.props.company
                })(<Input disabled />)}
              </Form.Item>

              <Form.Item label="Rate">
                {getFieldDecorator("rate", {
                  initialValue: 3.5
                })(<Rate />)}
              </Form.Item>

              <Form.Item label="Feedback">
                {getFieldDecorator("feedback", {
                  rules: [
                    {
                      required: true,
                      message: "Please leave feedback!"
                    }
                  ]
                })(
                  <Input.TextArea
                    placeholder="Tell us what you think about our service."
                    rows={4}
                  />
                )}
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "50%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Leave feedback
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create({
  name: "feedback",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(FeedbackForm);
