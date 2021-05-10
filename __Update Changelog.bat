:: https://stackoverflow.com/questions/672693/windows-batch-file-starting-directory-when-run-as-admin
pushd %~dp0

copy "..\akAfterCodecs\Changelog.js" "assets\docs\AfterCodecs Changelog.js"
copy "..\akBRAW_Studio\Changelog.js" "assets\docs\BRAW Studio Changelog.js"
copy "..\akPlumePack\Changelog.js" "assets\docs\PlumePack Changelog.js"

echo "Finished!"

pause

