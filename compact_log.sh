#!/bin/bash
tail -n1000 /root/BaseDati/myshelter_srv.log > /root/BaseDati/myshelter_srv2.log
cat /root/BaseDati/myshelter_srv2.log > /root/BaseDati/myshelter_srv.log
rm /root/BaseDati/myshelter_srv2.log
