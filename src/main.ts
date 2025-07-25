import { Peer } from 'peerjs'

const peer = new Peer('peer-connection-id')

peer.on('open', () => {
	console.log('Connection established')
})

peer.on('connection', (connection) => {
	connection.on('data', (data) => {
		console.log('Data Received', data)

		connection.send('LMAOO NIGGER')
	})

	connection.on('open', () => {
		console.log('Connection Open', connection)
	})

	connection.on('close', () => {
		console.log(`${connection.peer} disconnected`)
	})
})

const startConnectionBtn = document.getElementById('startConnection') as HTMLButtonElement
startConnectionBtn.addEventListener('click', () => start())

function start() {
	//console.log('Connection established')
}
