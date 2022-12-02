'use client'

import 'katex/dist/katex.min.scss'
import { BlockMath } from 'react-katex'

import styles from '../../styles/notion-block.module.scss'

const BlockEquation = ({ block }) => (
  <div className={styles.equation}>
    <BlockMath math={block.Equation.Expression} />
  </div>
)

export default BlockEquation
