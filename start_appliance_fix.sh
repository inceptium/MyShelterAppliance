#!/bin/bash
systemctl disable inceptiumdiscovery.service
systemctl disable myshelter.service
systemctl disable inceptiumservice.service
cp /root/MyShelterAppliance/reset_head_from_git /root/reset_head_from_git.sh
