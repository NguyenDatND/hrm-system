import React from "react";
import iconBF from "../css/img/label_HRM.svg";
import {
  Button,
  Form,
  Input,
  Card,
  notification,
  Layout,
  Divider,
} from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Content, Footer } from "antd/es/layout/layout";

const DivStyled = styled.div`
  background: rgb(243, 243, 243);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LayoutStyled = styled(Layout)`
  :where(.css-dev-only-do-not-override-yp8pcc).ant-layout {
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    background: #f5f5f5;
    align-items: center;
  }
`;
const PasswordStyled = styled(Input.Password)`
  :where(.css-dev-only-do-not-override-yp8pcc).ant-input-affix-wrapper {
    border: none;
    background: #f1f3f5;
    height: 47px;
    padding: 12px;
  }

  :where(.css-dev-only-do-not-override-yp8pcc).ant-input-affix-wrapper
    > input.ant-input {
    background: #f1f3f5;
  }

  :where(.css-dev-only-do-not-override-yp8pcc).ant-input-affix-wrapper:focus,
  :where(.css-dev-only-do-not-override-yp8pcc).ant-input-affix-wrapper-focused {
    box-shadow: none;
  }
`;
export const ChangePassword: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const onFinish = async (values: string) => {
    console.log(values);
    // try {
    //   setLoading(true);
    //   const response = await fetch(
    //     "https://api-training.hrm.div4.pgtest.co/api/v1/login",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(values),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const result = await response.json();
    //   if (result.message === "Success") {
    //     document.cookie =
    //       "token=" +
    //       result.data.token +
    //       "; expires=" +
    //       new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString() +
    //       "; path=/";
    //     navigate("/");
    //   } else {
    //     openNotification(result.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const openNotification = (message: string) => {
    api.open({
      message: "",
      description: message,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: "5px" }}
        >
          <path
            d="M10.29 3.85999L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9962 3.53002 21H20.47C20.8192 20.9962 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.85999C13.5318 3.5661 13.2807 3.32311 12.9812 3.15447C12.6817 2.98584 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3184 2.98584 11.0188 3.15447C10.7193 3.32311 10.4683 3.5661 10.29 3.85999V3.85999Z"
            stroke="#E5484D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 9V13"
            stroke="#E5484D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 17H12.01"
            stroke="#E5484D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      style: {
        color: "#E5484D",
        fontWeight: 600,
        background: "#FFEFEF",
      },
    });
  };

  // const {
  //   // register,
  //   // handleSubmit,
  //   // control,
  //   formState: { errors },
  // } = useForm<UserSubmitForm>({
  //   defaultValues: { username: "", password: "", company_id: "" },
  // });

  return (
    <DivStyled>
      {contextHolder}

      <LayoutStyled>
        <img src={iconBF} alt="" style={{ width: 100, marginTop: 64 }} />
        <h1 style={{ marginBottom: "80px" }}> HR Management System</h1>
        <Content>
          <h2 style={{ textAlign: "center" }}>Sign In</h2>
          <Card bordered={false} style={{ width: 350 }}>
            <h3 style={{ margin: 0 }}>Please input password</h3>
            <Divider style={{ margin: "5px 0 15px 0" }} />
            <Form
              layout="vertical"
              name="Forgot password Form"
              className="login-form"
              onFinish={onFinish}
            >
              <Form.Item
                name="password"
                label="New Password"
                rules={[{ required: true, message: "Please enter password!" }]}
              >
                <PasswordStyled
                  type="password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Confirm Password"
                rules={[{ required: true, message: "Please enter password!" }]}
              >
                <PasswordStyled
                  type="password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "100%", height: 48 }}
                  type="primary"
                  htmlType="submit"
                >
                  Confirm & Send OTP
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
        <Footer>
          <p>Copyright © 2022. All Rights Reserved</p>
        </Footer>
      </LayoutStyled>
    </DivStyled>
  );
};
