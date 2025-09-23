# Build the backend
cd ./BackEnd
npm run build
cd ..

# Build the frontend
cd ./FrontEnd
npm run build
cd ..

# Start both frontend and backend in parallel
Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd ./FrontEnd; npm start'
Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd ./BackEnd; npm start'
