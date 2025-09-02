import { Server } from 'socket.io';

let io;
const userSocketMap={}; //{userId->socketId}

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: ['http://localhost:5173'],
      methods: ['GET', 'POST'],
      credentials: true
    }
  });


  io.on('connection', (socket) => {
    // console.log('user connected', socket.id);
    const userId =  socket.handshake.query.userId;
    if(userId !== undefined){
        userSocketMap[userId]=socket.id;
    }

    io.emit('getOnlineUsers',Object.keys(userSocketMap));

    // Add your socket event handlers here
    socket.on('disconnect', () => {
      // if (userId !== 'undefined') {
        delete userSocketMap[userId];
      // }
      io.emit('getOnlineUsers',Object.keys(userSocketMap));
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};

export const getReceiverSocketId = (userId) => {
  return userSocketMap[userId];
};