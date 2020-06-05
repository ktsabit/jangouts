/**
 * Copyright (c) [2015-2019] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import { Subject } from 'rxjs';

export const createEventsService = () => {
  // User currently logged in
  let user = null;
  // Room currently in use
  let room = null;
  // TODO eventsSubject stores a reference to window.Rx object
  let roomSubject = null;
  // object to return
  let that = {};

  /*
   * TODO Subject to which the plugins must subscribe in order to react to the
   * emitted events.
   */
  that.getRoomSubject = function() {
    return roomSubject;
  };

  /**
   *  TODOEmits event after adding timestamp and status information to it
   *  @param {object} event - carries 'type' and 'data' for event
   */
  that.roomEvent = function(event, payload) {
    if (roomSubject === null || roomSubject === undefined) {
      console.error('Event emitter is not configured. Event not emitted');
    } else {
      //roomSubject.next({event, payload});
      roomSubject.next(event, payload);
    }
  };

  that.auditEvent = function(event, payload) {
    console.debug('TODO: bring audit events back - ' + event);
  };

  /*
   * Sets the information about the current signed-in user that will be
   * appended as status information to all the emitted messages.
   */
  that.setUser = function(value) {
    user = value;
  };

  /*
   * Sets the information about the room currently in use that will be
   * appended as status information to all the emitted messages.
   */
  that.setRoom = function(value) {
    room = value;
  };

  /**
   *  Emits event after adding timestamp and status information to it
   *  @param {object} event - carries 'type' and 'data' for event
   */
  that.emitEvent = function(event) {
    event.user = user;
    event.room = room;
    // timestamp shows the time when event gets emitted
    event.timestamp = Date.now();
    if (eventsSubject === null || eventsSubject === undefined) {
      console.warn('Event emitter is not configured. Event not emitted');
    } else {
      eventsSubject.next(event);
    }
  };

  /*
   * Initializes the events system.
   */
  const initSubjects = function() {
    roomSubject = new Subject();
    if (roomSubject === null || roomSubject === undefined) {
      console.error('Could not load rx.js! Event emitter will not work.');
    }
  };

  initSubjects();
  return that;
};
