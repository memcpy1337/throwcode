import React from 'react';
import styles from './ProblemDescriptionBlock.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { exact } from 'prop-types';
const ProblemDescriptionBlock = (props) => {
    let examples = props.description.examples.map((p, index) => {
        return (
            <div>
                <div className={styles.descriptionText}>Пример № {index + 1}</div>
                <div>
                    <SyntaxHighlighter language="javascript">
                       {"Ввод: " + p.input}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript">
                       {"Вывод: " + p.output}
                    </SyntaxHighlighter>
                </div>
            </div>
        )
    })
    console.log(SyntaxHighlighter.supportedLanguages);
    debugger;
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.descriptionTitle}>
                    Описание
                </div>
                <div className={styles.descriptionText}>
                    {props.description.text}
                </div>
            </div>
            <div className={styles.descriptionExamples}>
                <div className={styles.descriptionExamplesTitle}>Примеры работы программы</div>
                {
                    examples
                }
            </div>
            <div>
                <div className={styles.descriptionCheatsTitle}>
                    Подсказки
                </div>
                <div className={styles.descriptionCheatsText}>
                    {props.description.cheats}
                </div>
            </div>
            <div className={styles.console}>
                <SyntaxHighlighter language="xml">
                    Console output ERROR
            </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default ProblemDescriptionBlock;