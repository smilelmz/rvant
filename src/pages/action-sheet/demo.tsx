import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import ActionSheet from '@/components/ActionSheet'
import Cell from '@/components/Cell'
import Toast from '@/components/Toast'
import { ActionSheetAction } from '@/components/ActionSheet/index.types'
import './index.scss'

const ActionSheetDemo = () => {
  const [basic, setBasic] = useState(false)
  const [cancel, setCancel] = useState(false)
  const [title, setTitle] = useState(false)
  const [status, setStatus] = useState(false)
  const [description, setDescription] = useState(false)
  const onSelect = (item: ActionSheetAction) => {
    setBasic(false)
    Toast.info(item.name)
  }
  return (
    <MobileLayout title='ActionSheet' className='demo-action-sheet'>
      <DemoBlock title='基本用法' card>
        <Cell isLink title='基本用法' click={() => setBasic(true)} />
        <Cell isLink title='展示取消按钮' click={() => setCancel(true)} />
        <Cell isLink title='展示描述信息' click={() => setDescription(true)} />
      </DemoBlock>
      <DemoBlock title='选项状态' card>
        <Cell isLink title='选项状态' click={() => setStatus(true)} />
      </DemoBlock>
      <DemoBlock title='自定义面板' card>
        <Cell isLink title='自定义面板' click={() => setTitle(true)} />
      </DemoBlock>
      <ActionSheet
        show={basic}
        actions={[{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]}
        cancel={() => setBasic(false)}
        select={onSelect}
      />
      <ActionSheet
        show={cancel}
        closeOnClickAction
        actions={[{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]}
        updateShow={(v) => setCancel(v)}
        cancelText='取消'
      />
      <ActionSheet
        show={description}
        closeOnClickAction
        actions={[
          { name: '选项一' },
          { name: '选项二' },
          { name: '选项三', subname: '描述信息' }
        ]}
        cancelText='取消'
        description='这是一段描述信息'
        updateShow={(v) => setDescription(v)}
      />
      <ActionSheet
        show={status}
        closeOnClickAction
        actions={[
          { name: '着色选项', color: '#ee0a24' },
          { name: '这是一段描述信息', disabled: true },
          { loading: true }
        ]}
        updateShow={(v) => setStatus(v)}
        cancelText='取消'
      />
      <ActionSheet show={title} title='标题' updateShow={(v) => setTitle(v)}>
        <div className='demo-action-sheet-content'>内容</div>
      </ActionSheet>
    </MobileLayout>
  )
}

export default ActionSheetDemo
