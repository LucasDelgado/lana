import React from "react";
import Icon from "../atoms/Icon";
import Title from "../atoms/Title";
import Button from "../molecules/Button";
import "../../static/scss/molecules/_toast.scss";

const ModToast = ({ title, text, status }) => (
  <div className={`mod-toast --${status || ``}`}>
    <Button mod="--tertiary" title="Cerrar" icon="close"></Button>

    {
      {
        success: <Icon name="check-mark" />,
        warning: <Icon name="error-warning" />,
        info: <Icon name="info" />,
        alert: <Icon name="alert" />,
      }[status]
    }

    <div className="mod-description">
      <Title tag="h3" size="s">
        {title}
      </Title>
      {text && <span className="">{text}</span>}
    </div>
  </div>
);

export default ModToast;
