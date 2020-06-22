/**
 * Copyright (c) [2015-2020] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as chatActions } from '../../../state/ducks/messages';

function handleSubmit(event, dispatch, textInput) {
  event.preventDefault();

  const text = textInput.current.value;

  // TODO: validate data and give feedback
  dispatch(chatActions.send(text));
  textInput.current.value = '';
}

function MessageForm() {
  const textInput = React.createRef();
  const dispatch = useDispatch();

  return (
    <form
      data-testid="chatbox"
      className="p-2 flex-none bg-geomain border-t flex flex-row"
      onSubmit={(event) => handleSubmit(event, dispatch, textInput)}>
      <input
        id="text"
        type="text"
        autoComplete="off"
        className="appearance-none rounded flex-initial mr-2 p-2 focus:border-secondary focus:outline-none focus:shadow"
        placeholder="Enter your message here"
        ref={textInput}
      />
      <button type="submit"><i class="fa fa-paper-plane text-white px-2"></i></button>
    </form>
  );
}

export default MessageForm;
