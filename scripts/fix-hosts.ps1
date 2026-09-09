$hostsPath = "$env:SystemRoot\System32\drivers\etc\hosts"
$content = Get-Content $hostsPath -Raw
$content = $content -replace "([^\r\n])(159\.223\.169\.247)", "`$1`r`n`$2"
$content = $content -replace "\r?\n?159\.223\.169\.247 (www\.)?clublasaguilas\.com\r?\n?", ""
if (-not $content.EndsWith("`r`n")) { $content += "`r`n" }
$content += "159.223.169.247 clublasaguilas.com`r`n"
$content += "159.223.169.247 www.clublasaguilas.com`r`n"
Set-Content -Path $hostsPath -Value $content -NoNewline
ipconfig /flushdns | Out-Null
Write-Host "Hosts arreglado."
Get-Content $hostsPath | Select-Object -Last 5
