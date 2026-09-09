$hostsPath = "$env:SystemRoot\System32\drivers\etc\hosts"
$entries = @(
    "159.223.169.247 clublasaguilas.com",
    "159.223.169.247 www.clublasaguilas.com"
)
$current = Get-Content $hostsPath -Raw
foreach ($e in $entries) {
    if ($current -notmatch [regex]::Escape($e)) {
        Add-Content -Path $hostsPath -Value $e
        Write-Host "Agregado: $e"
    } else {
        Write-Host "Ya existia: $e"
    }
}
ipconfig /flushdns | Out-Null
Write-Host "Listo. DNS cache limpiada."
