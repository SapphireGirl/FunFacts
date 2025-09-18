# Makefile for Terraform workflows

init:
	terraform -chdir=environments/dev init

plan:
	terraform -chdir=environments/dev plan

apply:
	terraform -chdir=environments/dev apply -auto-approve

init-prod:
	terraform -chdir=environments/prod init

plan-prod:
	terraform -chdir=environments/prod plan

apply-prod:
	terraform -chdir=environments/prod apply -auto-approve
