const { EdgeTTS } = require('node-edge-tts');

const text = 'Hello'

//gen audio
const ttsasync = async function() {
    const tts = new EdgeTTS({
        voice: 'en-US-AriaNeural',
        lang: 'en-US',
        outputFormat: 'audio-24khz-96kbitrate-mono-mp3'
    })
    await tts.ttsPromise(text, './speech.mp3')
}
ttsasync();

//play audio
//exec(command, (error, stdout, stderr) => {
//    if (error) {
//      console.error('Error playing the MP3 file:', error);
//      process.exit(1); // Exit with an error code
//    }
//    console.log("(^Voice SUCCESSFUL^)")
//});