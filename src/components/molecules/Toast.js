import React        from "react";
import PropTypes    from 'prop-types';
import Icon         from "../atoms/Icon";
import Title        from "../atoms/Title";
import Button       from "./Button";
import Text         from '../atoms/Text';
import CallbackList from './CallbackList'
import "../../static/scss/molecules/_toast.scss";


const Toast = ({ href, title, text, status, close, linkText, 
                 callbackListTitle, callbackListText, description,
                 textButton1, textButton2, modButton1, modButton2,
                 href1, href2 }) => (
  <div className={`mod-toast --${status || ``}`}>
    {close && <Button mod="--tertiary" title="Cerrar" icon="close"></Button>}

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
      { text && <Text href={href} linkText={linkText}>{text}</Text> }
      { callbackListTitle && 
        <CallbackList 
          textButton1={textButton1} 
          textButton2={textButton2} 
          modButton1={modButton1} 
          modButton2={modButton2}
          title={callbackListTitle}
          listText={callbackListText}
          description={description}
          href1={href1}
          href2={href2} /> 
      }
    </div>
  </div>
);


Toast.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  status: PropTypes.string,
  close: PropTypes.bool,
  href: PropTypes.string,
  callbackListTitle: PropTypes.string,
  callbackListText: PropTypes.array,
  href1: PropTypes.string,
  href2: PropTypes.string,
  description: PropTypes.string,
  textButton1: PropTypes.string,
  textButton2: PropTypes.string,
  modButton1: PropTypes.string,
  modButton2: PropTypes.string,
}


export default Toast;
