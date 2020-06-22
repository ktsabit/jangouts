/**
 * Copyright (c) [2020] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import React, { useState } from 'react';
import { MessageSquare } from 'react-feather';

import Header from '../../Header';
import Speaker from '../../Speaker';
import Participants from '../../Participants';
import Chat from '../../Chat';
import Notifications from '../../Notifications';
import { LogOut } from '../../Room/Actions'

import { classNames } from '../../../utils/common';


function Classic() {
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="w-screen h-screen">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex-none px-4 py-1 text-white font-bold border-b-4 border-secondary bg-primary-dark ">
          <Header>
            <button
              title={showChat ? 'Hide chat' : 'Show chat'}
              onClick={() => setShowChat(!showChat)}>
              <MessageSquare
                className={classNames(
                  'p-1 rounded',
                  showChat ? 'bg-white text-primary' : 'bg-primary-dark hover:bg-primary text-white'
                )}
              />
            </button>
          </Header>
        </div>
        {/* Content */}
        <div className="flex flex-row antialiased h-screen">
          <div
            className={classNames(
              'bg-geomain w-64 flex flex-col p-4'
            )}>
                <LogOut />
          </div>
          {/* Videos */}
          <div className="flex-1 flex flex-col">
            {/* <Notifications
            className="w-full absolute z-50 flex flex-col items-center"
          /> */}
            <div
              className={classNames(
                'flex-1 bg-black flex justify-center',
                !showChat && ''
              )}>
              <Speaker />
            </div>
            <div
              className={classNames(
                'flex-none bg-blue-500',
                !showChat && ''
              )}>
              <Participants />
            </div>
          </div>
          {showChat && (
            <div className="flex-none flex flex-col bg-geomain overflow-hidden bg-geomain">
              <Chat />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Classic;
