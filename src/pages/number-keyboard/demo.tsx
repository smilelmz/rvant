import React, { useCallback, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import NumberKeyboard from '@/components/NumberKeyboard'
import Cell from '@/components/Cell'
import './index.scss'
import Field from '@/components/Field'

const NumberKeyboardDemo = () => {
  const [keyboard, setKeyboard] = useState('')
  const [text, setText] = useState('')
  const onInput = (value: string) => console.log(`输入: ${value}`)
  const onDelete = () => console.log(`delete`)
  return (
    <MobileLayout title='NumberKeyboard' className='demo-number-keyboard'>
      <DemoBlock card>
        <Cell isLink click={useCallback(() => setKeyboard('default'), [])}>
          弹出默认键盘
        </Cell>
        <Cell isLink click={useCallback(() => setKeyboard('custom'), [])}>
          弹出带右侧栏的键盘
        </Cell>
        <Cell isLink click={useCallback(() => setKeyboard('extraKey'), [])}>
          弹出身份证号键盘
        </Cell>
        <Cell isLink click={useCallback(() => setKeyboard('title'), [])}>
          弹出带标题的键盘
        </Cell>
        <Cell
          isLink
          click={useCallback(() => setKeyboard('multiExtraKey'), [])}
        >
          弹出配置多个按键的键盘
        </Cell>
        <Cell
          isLink
          click={useCallback(() => setKeyboard('randomKeyOrder'), [])}
        >
          弹出配置随机数字的键盘
        </Cell>
        <Field
          value={text}
          readonly
          clickable
          label='绑定数据'
          placeholder='点此输入'
          click={useCallback(() => setKeyboard('bindValue'), [])}
        />
        <NumberKeyboard
          visible={keyboard === 'default'}
          extraKey='.'
          blur={useCallback(() => setKeyboard(''), [])}
          input={onInput}
          delete={onDelete}
        />
        <NumberKeyboard
          visible={keyboard === 'custom'}
          closeButtonText='完成'
          theme='custom'
          extraKey='.'
          blur={useCallback(() => setKeyboard(''), [])}
          input={onInput}
          delete={onDelete}
        />
        <NumberKeyboard
          visible={keyboard === 'extraKey'}
          closeButtonText='完成'
          extraKey='X'
          blur={useCallback(() => setKeyboard(''), [])}
          input={onInput}
          delete={onDelete}
        />
        <NumberKeyboard
          visible={keyboard === 'title'}
          closeButtonText='完成'
          title='键盘标题'
          extraKey='.'
          blur={useCallback(() => setKeyboard(''), [])}
          input={onInput}
          delete={onDelete}
        />
        <NumberKeyboard
          visible={keyboard === 'multiExtraKey'}
          closeButtonText='完成'
          theme='custom'
          extraKey={['00', '.']}
          blur={useCallback(() => setKeyboard(''), [])}
          input={onInput}
          delete={onDelete}
        />
        <NumberKeyboard
          visible={keyboard === 'randomKeyOrder'}
          randomKeyOrder
          blur={useCallback(() => setKeyboard(''), [])}
          input={onInput}
          delete={onDelete}
        />
        <NumberKeyboard
          value={text}
          visible={keyboard === 'bindValue'}
          maxlength='6'
          change={(v) => setText(v)}
          blur={useCallback(() => setKeyboard(''), [])}
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default NumberKeyboardDemo
