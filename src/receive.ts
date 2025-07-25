import Peer, { type DataConnection } from 'peerjs'

const connectPeerBtn = document.getElementById('connectPeer') as HTMLButtonElement
const messageInput = document.getElementById('messageInput') as HTMLInputElement
const sendButton = document.getElementById('sendButton') as HTMLButtonElement

const peer = new Peer('guest-id')
let connection: DataConnection | null = null

connectPeerBtn.addEventListener('click', () => {
	connection = peer.connect('peer-connection-id')
})

sendButton.addEventListener('click', () => {
	connection?.send(messageInput.value)

	messageInput.value = ''
})

peer.on('connection', (conn) => {
	conn.on('data', (data) => {
		console.log('Data Received', data)
	})

	conn.on('open', () => {
		console.log('Connection open')
	})
})

peer.on('open', () => {
	console.log('Connection open, ready to receive')
})
