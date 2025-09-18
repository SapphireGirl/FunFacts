# PowerShell deploy script for Terraform
Set-Location -Path "$PSScriptRoot\environments\dev"
terraform init
terraform plan
terraform apply -auto-approve
