import React from 'react'
import './SocioButton.css'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd2lrgr288-NpbMEf0kSV0sdJEXlWdMPJxUUBHdUAVpIvuoMg/viewform'

export default function SocioButton() {
  return (
    <a
      className="socio-btn"
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Quiero ser socio del Club Las Águilas"
    >
      <span className="socio-btn-text">Quiero ser socio</span>
    </a>
  )
}
