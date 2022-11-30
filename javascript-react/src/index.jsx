import React from 'react'
import { createRoot } from 'react-dom/client'

import Application from './Application'

const container = document.getElementById('react-mount-point')
createRoot(container).render(<Application />)
