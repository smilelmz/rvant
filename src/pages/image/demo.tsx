import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import SmileImage from '@/components/Image'
import Row from '@/components/Row'
import Col from '@/components/Col'
import Loading from '@/components/Loading'
import './index.scss'

const ImageDemo = () => {
  const image = 'https://img.yzcdn.cn/vant/cat.jpeg'
  const renderImage = (round = false) => {
    return (
      <DemoBlock title='填充模式'>
        <Row gutter={24}>
          <Col span={8}>
            <SmileImage
              fit='contain'
              width='100%'
              height='27vw'
              src={image}
              round={round}
            />
            <div className='text'>contain</div>
          </Col>
          <Col span={8}>
            <SmileImage
              fit='cover'
              width='100%'
              height='27vw'
              src={image}
              round={round}
            />
            <div className='text'>cover</div>
          </Col>
          <Col span={8}>
            <SmileImage
              fit='fill'
              width='100%'
              height='27vw'
              src={image}
              round={round}
            />
            <div className='text'>fill</div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <SmileImage
              fit='none'
              width='100%'
              height='27vw'
              src={image}
              round={round}
            />
            <div className='text'>none</div>
          </Col>
          <Col span={8}>
            <SmileImage
              fit='scale-down'
              width='100%'
              height='27vw'
              src={image}
              round={round}
            />
            <div className='text'>scale-down</div>
          </Col>
        </Row>
      </DemoBlock>
    )
  }
  return (
    <MobileLayout title='Image' className='demo-image'>
      <DemoBlock title='基础用法'>
        <SmileImage width={100} height={100} src={image} />
      </DemoBlock>
      {renderImage()}
      {renderImage(true)}
      {renderImage()}
      {renderImage()}
      <DemoBlock title='加载中提示'>
        <Row gutter={24}>
          <Col span={8}>
            <SmileImage width='100%' height='27vw' />
            <div className='text'>defaultTip</div>
          </Col>
          <Col span={8}>
            <SmileImage
              width='100%'
              height='27vw'
              loadingIcon={<Loading type='spinner' size='20' />}
            />
            <div className='text'>customTip</div>
          </Col>
        </Row>
      </DemoBlock>
      <DemoBlock title='加载失败提示'>
        <Row gutter={24}>
          <Col span={8}>
            <SmileImage width='100%' height='27vw' src='x' />
            <div className='text'>defaultTip</div>
          </Col>
          <Col span={8}>
            <SmileImage
              width='100%'
              height='27vw'
              src='x'
              errorIcon={<span>加载失败</span>}
            />
            <div className='text'>customTip</div>
          </Col>
        </Row>
      </DemoBlock>
      <DemoBlock title='测试懒加载'>
        <Row gutter={24}>
          <Col span={8}>
            <SmileImage
              width='100%'
              height='27vw'
              lazyLoad
              src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599221312118&di=d38ee544661558dd24a67d54f278df80&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1510%2F04%2Fc7%2F13503178_13503178_1443946277302.jpg'
            />
          </Col>
          <Col span={8}>
            <SmileImage
              width='100%'
              height='27vw'
              lazyLoad
              src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599221312118&di=1c744a22515ee108e4ac6ee20b714b55&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-01-25%2F5a699c4a6ed20.jpg'
            />
          </Col>
        </Row>
      </DemoBlock>
    </MobileLayout>
  )
}

export default ImageDemo
