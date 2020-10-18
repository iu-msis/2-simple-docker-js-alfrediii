<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT m.certificationID as cID, fname, lname,  certName, certAgency, certExp, radioNum, mainDepartment, email
        FROM person p join certification c join memberCert m on (p.personID=m.personID) and (c.certificationID=m.certificationID)
        ORDER BY cID';
$vars = [];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$people = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($people, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
