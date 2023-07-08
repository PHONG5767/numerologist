// // Khi người dùng click vào button
// document.getElementById('btnReadText').addEventListener('click', function() {
//     // Lấy nội dung văn bản từ một phần tử HTML (ví dụ: textarea)
//     var text = document.getElementById('myText').value;
    
//     // Gọi API Text-to-Speech
//     var client = new GoogleCloudTextToSpeechClient();
//     client.synthesizeSpeech({
//       input: { text: text },
//       voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
//       audioConfig: { audioEncoding: 'MP3' }
//     }, function(err, response) {
//       if (err) {
//         console.error('Lỗi:', err);
//         return;
//       }
      
//       // Phát âm thanh
//       var audio = new Audio('data:audio/mp3;base64,' + response.audioContent);
//       audio.play();
//     });
//   });
  