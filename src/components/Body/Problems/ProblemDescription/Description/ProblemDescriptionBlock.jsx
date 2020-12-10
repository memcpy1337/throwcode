import React from 'react';
import styles from './ProblemDescriptionBlock.module.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, synthwave84, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { exact } from 'prop-types';
const ProblemDescriptionBlock = (props) => {
    let examples = props.description.examples.map((p, index) => {
        return (
            <div>
                <div className={styles.descriptionText}>Пример № {index + 1}</div>
                <div>
                    <SyntaxHighlighter style={atomDark} language="javascript">
                        {"Ввод: " + p.input}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter style={atomDark} language="javascript">
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
                {
                    props.codeSubmitResult.success == null ? <SyntaxHighlighter style={atomDark}  language="vala">Ожидание решения</SyntaxHighlighter> : props.codeSubmitResult.success ? <SyntaxHighlighter showLineNumbers={false} style={atomDark} wrapLongLines={true} className={styles.goodResult} language="vala">{props.codeSubmitResult.response}</SyntaxHighlighter>
                      : 
                      <SyntaxHighlighter style={atomDark} showLineNumbers={false} wrapLongLines={true} className={styles.badResult} language="vala">{props.codeSubmitResult.response}</SyntaxHighlighter>
                }
            </div>
        </div>
    )
}

export default ProblemDescriptionBlock;