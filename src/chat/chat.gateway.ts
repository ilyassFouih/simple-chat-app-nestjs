import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, 
OnGatewayDisconnect, 
} from '@nestjs/websockets';
import { Message } from 'src/models/message.class';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;
    users: number = 0;
    messages:Message[]=[]

    async handleConnection(){
        // A client has connected
        this.users++;

        // Notify connected clients of current users
        this.server.emit('users', this.users);
    }

    async handleDisconnect(){

        // A client has disconnected
        this.users--;

        // Notify connected clients of current users
        this.server.emit('users', this.users);

    }

    @SubscribeMessage('chat')
    async onChat(client, message:Message){
        this.messages.push(message)
        client.broadcast.emit('chat', this.messages);
    }

}
