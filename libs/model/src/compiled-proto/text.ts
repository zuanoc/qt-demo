/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { CallContext, CallOptions } from 'nice-grpc-common';

export const protobufPackage = 'hero';

export enum ActionType {
  NEW_INPUT = 0,
  TEXT_TYPING = 1,
  TEXT_SAVE = 2,
  TEXT_CANCEL = 3,
  FETCH_ALL = 4,
  USER_DELETION = 5,
  UNRECOGNIZED = -1,
}

export interface UserText {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  text: string;
  userId: string;
}

export interface NewInputAction {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
}

export interface TextTypingAction {
  id: string;
  type: string;
}

export interface TextSaveAction {
  id: string;
}

export interface TextCancelAction {
  id: string;
}

export interface UserDeletionAction {
  userId: string;
}

export interface FetchAllAction {
  texts: UserText[];
}

export interface UserAction {
  userId: string;
  type?: ActionType | undefined;
  newInputAction?: NewInputAction | undefined;
  textTypingAction?: TextTypingAction | undefined;
  textSaveAction?: TextSaveAction | undefined;
  textCancelAction?: TextCancelAction | undefined;
  fetchAllAction?: FetchAllAction | undefined;
  userDeletionAction?: UserDeletionAction | undefined;
}

function createBaseUserText(): UserText {
  return { id: '', x: 0, y: 0, w: 0, h: 0, color: '', text: '', userId: '' };
}

export const UserText = {
  encode(message: UserText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    if (message.w !== 0) {
      writer.uint32(32).int32(message.w);
    }
    if (message.h !== 0) {
      writer.uint32(40).int32(message.h);
    }
    if (message.color !== '') {
      writer.uint32(50).string(message.color);
    }
    if (message.text !== '') {
      writer.uint32(58).string(message.text);
    }
    if (message.userId !== '') {
      writer.uint32(66).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.x = reader.int32();
          break;
        case 3:
          message.y = reader.int32();
          break;
        case 4:
          message.w = reader.int32();
          break;
        case 5:
          message.h = reader.int32();
          break;
        case 6:
          message.color = reader.string();
          break;
        case 7:
          message.text = reader.string();
          break;
        case 8:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UserText>): UserText {
    const message = createBaseUserText();
    message.id = object.id ?? '';
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.w = object.w ?? 0;
    message.h = object.h ?? 0;
    message.color = object.color ?? '';
    message.text = object.text ?? '';
    message.userId = object.userId ?? '';
    return message;
  },
};

function createBaseNewInputAction(): NewInputAction {
  return { id: '', x: 0, y: 0, w: 0, h: 0, color: '' };
}

export const NewInputAction = {
  encode(message: NewInputAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    if (message.w !== 0) {
      writer.uint32(32).int32(message.w);
    }
    if (message.h !== 0) {
      writer.uint32(40).int32(message.h);
    }
    if (message.color !== '') {
      writer.uint32(50).string(message.color);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewInputAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewInputAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.x = reader.int32();
          break;
        case 3:
          message.y = reader.int32();
          break;
        case 4:
          message.w = reader.int32();
          break;
        case 5:
          message.h = reader.int32();
          break;
        case 6:
          message.color = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<NewInputAction>): NewInputAction {
    const message = createBaseNewInputAction();
    message.id = object.id ?? '';
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.w = object.w ?? 0;
    message.h = object.h ?? 0;
    message.color = object.color ?? '';
    return message;
  },
};

function createBaseTextTypingAction(): TextTypingAction {
  return { id: '', type: '' };
}

export const TextTypingAction = {
  encode(
    message: TextTypingAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== '') {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextTypingAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextTypingAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TextTypingAction>): TextTypingAction {
    const message = createBaseTextTypingAction();
    message.id = object.id ?? '';
    message.type = object.type ?? '';
    return message;
  },
};

function createBaseTextSaveAction(): TextSaveAction {
  return { id: '' };
}

export const TextSaveAction = {
  encode(message: TextSaveAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextSaveAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextSaveAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TextSaveAction>): TextSaveAction {
    const message = createBaseTextSaveAction();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseTextCancelAction(): TextCancelAction {
  return { id: '' };
}

export const TextCancelAction = {
  encode(
    message: TextCancelAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextCancelAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextCancelAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TextCancelAction>): TextCancelAction {
    const message = createBaseTextCancelAction();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseUserDeletionAction(): UserDeletionAction {
  return { userId: '' };
}

export const UserDeletionAction = {
  encode(
    message: UserDeletionAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.userId !== '') {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserDeletionAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDeletionAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UserDeletionAction>): UserDeletionAction {
    const message = createBaseUserDeletionAction();
    message.userId = object.userId ?? '';
    return message;
  },
};

function createBaseFetchAllAction(): FetchAllAction {
  return { texts: [] };
}

export const FetchAllAction = {
  encode(message: FetchAllAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.texts) {
      UserText.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchAllAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchAllAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.texts.push(UserText.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FetchAllAction>): FetchAllAction {
    const message = createBaseFetchAllAction();
    message.texts = object.texts?.map(e => UserText.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserAction(): UserAction {
  return {
    userId: '',
    type: undefined,
    newInputAction: undefined,
    textTypingAction: undefined,
    textSaveAction: undefined,
    textCancelAction: undefined,
    fetchAllAction: undefined,
    userDeletionAction: undefined,
  };
}

export const UserAction = {
  encode(message: UserAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== '') {
      writer.uint32(10).string(message.userId);
    }
    if (message.type !== undefined) {
      writer.uint32(16).int32(message.type);
    }
    if (message.newInputAction !== undefined) {
      NewInputAction.encode(message.newInputAction, writer.uint32(26).fork()).ldelim();
    }
    if (message.textTypingAction !== undefined) {
      TextTypingAction.encode(
        message.textTypingAction,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.textSaveAction !== undefined) {
      TextSaveAction.encode(message.textSaveAction, writer.uint32(42).fork()).ldelim();
    }
    if (message.textCancelAction !== undefined) {
      TextCancelAction.encode(
        message.textCancelAction,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.fetchAllAction !== undefined) {
      FetchAllAction.encode(message.fetchAllAction, writer.uint32(58).fork()).ldelim();
    }
    if (message.userDeletionAction !== undefined) {
      UserDeletionAction.encode(
        message.userDeletionAction,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.newInputAction = NewInputAction.decode(reader, reader.uint32());
          break;
        case 4:
          message.textTypingAction = TextTypingAction.decode(reader, reader.uint32());
          break;
        case 5:
          message.textSaveAction = TextSaveAction.decode(reader, reader.uint32());
          break;
        case 6:
          message.textCancelAction = TextCancelAction.decode(reader, reader.uint32());
          break;
        case 7:
          message.fetchAllAction = FetchAllAction.decode(reader, reader.uint32());
          break;
        case 8:
          message.userDeletionAction = UserDeletionAction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UserAction>): UserAction {
    const message = createBaseUserAction();
    message.userId = object.userId ?? '';
    message.type = object.type ?? undefined;
    message.newInputAction =
      object.newInputAction !== undefined && object.newInputAction !== null
        ? NewInputAction.fromPartial(object.newInputAction)
        : undefined;
    message.textTypingAction =
      object.textTypingAction !== undefined && object.textTypingAction !== null
        ? TextTypingAction.fromPartial(object.textTypingAction)
        : undefined;
    message.textSaveAction =
      object.textSaveAction !== undefined && object.textSaveAction !== null
        ? TextSaveAction.fromPartial(object.textSaveAction)
        : undefined;
    message.textCancelAction =
      object.textCancelAction !== undefined && object.textCancelAction !== null
        ? TextCancelAction.fromPartial(object.textCancelAction)
        : undefined;
    message.fetchAllAction =
      object.fetchAllAction !== undefined && object.fetchAllAction !== null
        ? FetchAllAction.fromPartial(object.fetchAllAction)
        : undefined;
    message.userDeletionAction =
      object.userDeletionAction !== undefined && object.userDeletionAction !== null
        ? UserDeletionAction.fromPartial(object.userDeletionAction)
        : undefined;
    return message;
  },
};

export type TextServiceDefinition = typeof TextServiceDefinition;
export const TextServiceDefinition = {
  name: 'TextService',
  fullName: 'hero.TextService',
  methods: {
    connection: {
      name: 'connection',
      requestType: UserAction,
      requestStream: true,
      responseType: UserAction,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface TextServiceServiceImplementation<CallContextExt = {}> {
  connection(
    request: AsyncIterable<UserAction>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<UserAction>>;
}

export interface TextServiceClient<CallOptionsExt = {}> {
  connection(
    request: AsyncIterable<DeepPartial<UserAction>>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<UserAction>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

export type ServerStreamingMethodResult<Response> = {
  [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
