import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Pagination from '@/components/Pagination'
import { Icon } from '@/components'
import { PageItem } from '@/components/Pagination/types'
import './index.scss'

const PaginationDemo = () => {
  const [currentPage1, setCurrentPage1] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(1)
  const [currentPage3, setCurrentPage3] = useState(1)
  const [currentPage4, setCurrentPage4] = useState(1)
  return (
    <MobileLayout title='Pagination' className='demo-pagination'>
      <DemoBlock title='基本用法'>
        <Pagination
          value={currentPage1}
          totalItems='24'
          itemsPerPage='5'
          prevText='上一页'
          nextText='下一页'
          change={(v) => setCurrentPage1(v)}
        />
      </DemoBlock>
      <DemoBlock title='基本用法'>
        <Pagination
          value={currentPage2}
          pageCount={12}
          prevText='上一页'
          nextText='下一页'
          mode='simple'
          change={(v) => setCurrentPage2(v)}
        />
      </DemoBlock>
      <DemoBlock title='基本用法'>
        <Pagination
          value={currentPage3}
          forceEllipses
          totalItems='125'
          showPageSize='3'
          prevText='上一页'
          nextText='下一页'
          change={(v) => setCurrentPage3(v)}
        />
      </DemoBlock>
      <DemoBlock title='基本用法'>
        <Pagination
          value={currentPage4}
          totalItems='125'
          showPageSize='5'
          prevText={<Icon name='arrow-left' />}
          nextText={<Icon name='arrow' />}
          renderPage={({ text }: PageItem) => text}
          change={(v) => setCurrentPage4(v)}
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default PaginationDemo
