import React, { useState, useEffect } from 'react';
import { View, Text, Button , TextInput,SafeAreaView, FlatList} from 'react-native';
import io from 'socket.io-client';

// Replace with your server's IP and port
// const serverURL = 'http://192.168.43.247:3000'; // lucas portable
const serverURL = 'http://192.168.43.23:3000'; // mi portable
const socket = io(serverURL);

const ClientSide = () => {
    const [message, setMessage] = useState('');
    const [receivedMessage, setReceivedMessage]   = useState('');
    const [messages, setMessages] = useState([]); 
    
    const sendMessageToServer = () => {
        // Send data to the server
        socket.emit('data', message);
        
    };

    useEffect(() => {
        // Listen for incoming messages from the server
        socket.on('data', (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
        });
        socket.on('connect_error', (error) => {
        console.error('Socket.io Connection Error:', error);
        });

        // Clean up the socket listener when the component unmounts
        return () => {
        socket.off('data');
        };
    }, []);

    return (
        <View>
        <Text>React Native Socket.io Communication</Text>
        <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Enter a message"
        />
        <Button title="Send Message" onPress={sendMessageToServer} />
        <Text>Received Message:</Text>
        <SafeAreaView>
            <FlatList
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text>{item}</Text>}
            />
        </SafeAreaView>
        </View>
    );
};

export default ClientSide;