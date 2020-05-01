import { memo, forwardRef } from 'react';
import {
  ChatContainer,
  ChatToggler
} from '../style';
import ChatSvg from '../../../svgs/chat';

const Chat = (props, ref) => {
  return (
    <ChatContainer>
      <ChatToggler
        ref={ref}
      >
        <ChatSvg />
      </ChatToggler>
    </ChatContainer>
  );
}

export default memo(forwardRef(Chat));