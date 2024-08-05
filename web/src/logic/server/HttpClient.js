import API_URL from "./Variables"

/**
 * Uses simple fetch() to send message to the bot server using REST API
 *
 * @param message the message to be sent
 * @param queryId get from webApp.initDataUnsafe?.query_id
 */
export const sendMessageToServer = async (message, queryId) => {
    // const body = {
    //     queryId: queryId,
    //     message: message
    // }

    const body = {
        chat_id: 7465209389,
        text: message
    }
    console.log(API_URL);

    const messagesEndpoint = `https://api.telegram.org/bot6554380665:AAF-QJGmowsUR9PeiUdyVnbbcBXuipjFUqE/sendMessage`
    return await fetch(messagesEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}
