:: https://stackoverflow.com/questions/672693/windows-batch-file-starting-directory-when-run-as-admin
pushd %~dp0

cd files_to_copy
del Versions.zip /q
del Changelog_BRAW_Studio.zip /q
del Changelog_AfterCodecs.zip /q
del Changelog_PlumePack.zip /q
cd ..
"C:\Program Files\7-Zip\7z.exe" -mx1 a ./files_to_copy/Versions.zip AfterCodecs.txt BRAW_Studio.txt  PlumePack.txt
copy files_to_copy\Versions.zip files_to_copy\Changelog_BRAW_Studio.zip
copy files_to_copy\Versions.zip files_to_copy\Changelog_AfterCodecs.zip
copy files_to_copy\Versions.zip files_to_copy\Changelog_PlumePack.zip



git add ./files_to_copy/Versions.zip
git add ./files_to_copy/Changelog_BRAW_Studio.zip
git add ./files_to_copy/Changelog_AfterCodecs.zip
git add ./files_to_copy/Changelog_PlumePack.zip
git add BRAW_Studio.txt
git add AfterCodecs.txt
git add PlumePack.txt
git commit -m "updated Versions.zip with script"
git push

pause