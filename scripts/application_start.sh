#!/bin/bash

# Start the server
export PM2_HOME=/home/ubuntu/.pm2
pm2 delete client
cd /home/ubuntu/client/
pm2 start --name client npm -- start