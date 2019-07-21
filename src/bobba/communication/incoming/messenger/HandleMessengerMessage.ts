import IIncomingEvent from "../IIncomingEvent";
import ServerMessage from "../../protocol/ServerMessage";
import BobbaEnvironment from "../../../BobbaEnvironment";

export default class HandleMessengerMessage implements IIncomingEvent {
    handle(request: ServerMessage) {
        const userId = request.popInt();
        const text = request.popString();
        const isMe = request.popBoolean();

        BobbaEnvironment.getGame().messenger.handleMessengerMessage(userId, text, isMe);
    }
}