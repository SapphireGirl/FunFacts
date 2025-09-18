#!/bin/bash
# Deploy script for Terraform
set -e
cd $(dirname "$0")/environments/dev
terraform init
terraform plan
terraform apply -auto-approve
