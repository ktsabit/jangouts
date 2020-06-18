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

import { classNames } from '../../../utils/common';

function Classic() {
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="w-screen h-screen bg-primary-dark border-b-8 border-primary-dark">
      <div className="h-full padding-b-4 flex flex-col bg-gray-100">
        <div className="px-4 py-1 text-white font-bold border-b-4 border-secondary bg-primary-dark ">
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
        <div className="flex flex-row">
        <div className="col-span-3 flex flex-col">
          {/* <Notifications
            className="w-full absolute z-50 flex flex-col items-center"
          /> */}
          <div
            className={classNames(
              'row-span-1 flex justify-center bg-black',
              !showChat && ''
            )}> 
            <Speaker />
          </div>
          <div
            className={classNames(
              'row-span-1 bg-blue-500',
              !showChat && ''
            )}>
            <Participants />
          </div>
        </div>
        {showChat && (
          <div className="col-span-1 bg-yellow-500 ">
            <Chat />
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Classic;
