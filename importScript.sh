#!/bin/bash

echo starting..

rm temp.csv*

echo removed any existing temp files

# replace first occurrence of display name with field names on line 1
# create new file then write in place in that new file
sed '1s/DRG Definition/drg_def/' Inpatient_Prospective_Payment_System__IPPS__Provider_Summary_for_the_Top_100_Diagnosis-Related_Groups__DRG__-_FY2011.csv > temp.csv
sed -i '.bak' '1s/Provider Id/prov_id/' temp.csv
sed -i '.bak' '1s/Provider Name/name/' temp.csv
sed -i '.bak' '1s/Provider Street Address/street_address/' temp.csv
sed -i '.bak' '1s/Provider City/city/' temp.csv
sed -i '.bak' '1s/Provider State/state/' temp.csv
sed -i '.bak' '1s/Provider Zip Code/zip/' temp.csv
sed -i '.bak' '1s/Hospital Referral Region Description/hospital_referral_region_desc/' temp.csv
sed -i '.bak' '1s/Total Discharges/total_discharges/' temp.csv
sed -i '.bak' '1s/Average Covered Charges/avg_covered_charges/' temp.csv
sed -i '.bak' '1s/Average Total Payments/avg_total_payments/' temp.csv
sed -i '.bak' '1s/Average Medicare Payments/avg_medicare_payments/' temp.csv

echo create temp file with db field names

sed -i '.bak' 's/\(\$\)\([0-9][0-9.]*\)/\2/g' temp.csv

echo formatted dollar values to numbers in temp file

mongoimport --db bain_db --collection providers --type csv --headerline --file temp.csv

echo imported data from new file into mongodb bain_db providers

rm temp.csv*

# echo remove temp files
