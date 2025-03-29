const http = require('http');
const os = require('os');
const fs = require('fs');
const path = require('path');

// Configuration
const PORT = process.env.PORT || 8081;

// Get all network interfaces
function getNetworkInterfaces() {
    const interfaces = os.networkInterfaces();
    const addresses = [];
    
    for (const interfaceName in interfaces) {
        const interface = interfaces[interfaceName];
        
        for (const details of interface) {
            // Skip over non-IPv4 and internal (loopback) addresses
            if (details.family === 'IPv4' && !details.internal) {
                addresses.push({
                    interface: interfaceName,
                    address: details.address
                });
            }
        }
    }
    
    return addresses;
}

// Serve static files
function serveStaticFile(req, res) {
    // Get the file path
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }
    
    // Get the file extension
    const extname = path.extname(filePath);
    
    // Set the content type based on the file extension
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
    }
    
    // Read the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                fs.readFile('./index.html', (err, data) => {
                    if (err) {
                        // Can't even serve index.html
                        res.writeHead(500);
                        res.end('Error: Cannot find index.html file');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success - return the file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    serveStaticFile(req, res);
});

// Start the server
server.listen(PORT, () => {
    console.log('\n=== SERVER INFORMATION ===');
    
    const networkInterfaces = getNetworkInterfaces();
    
    if (networkInterfaces.length === 0) {
        console.log('No active network interfaces found.');
    } else {
        console.log('\nServer running at:');
        networkInterfaces.forEach(ni => {
            console.log(`http://${ni.address}:${PORT}`);
        });
    }
    
    console.log('\nAccess your fitness website from any device on your network');
    console.log('Press Ctrl+C to stop the server.');
}); 