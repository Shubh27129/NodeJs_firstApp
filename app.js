const http= require('http')

const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<h1>Shubham Kumar Sinha</h1>')
    res.write('</html>')
})

server.listen(4000)