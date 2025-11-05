const express = require('express');
const app = express();

app.get('/getdata', (req, res) => {
  res.status(200).json({ message: 'Ho gaya hai bhai' });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'for testing purpose' });
});
app.listen(5000, () => {
  console.log('listening on server');
});

// ssh -i "C:\Users\singh\.ssh\keypair.pem" ec2-user@18.216.242.59

// #!/bin/bash

// echo "Updating system packages..."
// sudo dnf update -y

// echo "Installing Docker..."
// sudo dnf install -y docker

// echo "Adding ec2-user to docker group..."
// sudo usermod -aG docker ec2-user

// echo "Enabling and starting Docker service..."
// sudo systemctl enable docker
// sudo systemctl start docker

// echo "Verifying Docker installation..."
// docker --version || echo "Docker not found in current session (>

// echo ""
// echo "Docker installation complete on Amazon Linux 2025!"
// echo "IMPORTANT: Log out and log back in (or run 'newgrp docker>
// echo "so that 'ec2-user' can run docker without sudo."
// echo ""
// echo "After re-login,test with:"
// echo "docker run hello-world"

// - name: Run Ansible playbook
//   uses: dawidd6/action-ansible-playbook@v2
//   with:
//     playbook: ./ansible/install_docker.yml # ✅ explicit relative path
//     inventory: ./ansible/hosts.ini # ✅ explicit relative path
//     key: ${{ secrets.EC2_KEY }}
//     directory: ./ # ✅ ensures correct working dir
