import React, { useState } from 'react'

import './index.scss'
import { Button } from '../../atoms';
import { toast } from 'react-toastify';

type Props = {
  show: boolean
  onClose: () => void
}

const menuItems = [
  // ...
  {
    title: 'Services',
    url: 'services',
    submenu: [
      {
        title: 'web design 1',
        url: 'web-design',
        submenu: [
          {
            title: 'React',
            url: 'react',
          },
          {
            title: 'Vue JS',
            url: 'vue',
          },
        ]
      },
      {
        title: 'web development 1',
        url: 'web-dev',
        submenu: [
          {
            title: 'Level 3 nih',
            url: 'level3'
          }
        ]
      },
      {
        title: 'SEO 1',
        url: 'seo',
      },
    ],
  },
  {
    title: 'item 2',
    url: 'item2',
    submenu: [
      {
        title: 'web design',
        url: 'web-design',
        submenu: [
          {
            title: 'React',
            url: 'react',
          },
          {
            title: 'Vue JS',
            url: 'vue',
          },
        ]
      },
      {
        title: 'web development',
        url: 'web-dev',
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
  // ...
];

type CategoryData = {
  title: string
  url: string
  submenu?: CategoryData[]
}

const index = ({
  show,
  onClose
}: Props) => {
  const [level1] = useState<CategoryData[] | undefined>(menuItems)
  const [level2, setLevel2] = useState<CategoryData[] | undefined>([])
  const [level3, setLevel3] = useState<CategoryData[] | undefined>([])

  const [selected1, setSelected1] = useState<string>('')
  const [selected2, setSelected2] = useState<string>('')
  const [selected3, setSelected3] = useState<string>('')

  const mountedStyle = {
    animation: "inAnimation 250ms ease-in"
  };

  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };

  const submitSelected = () => {
    if (!selected1 && !selected2 && !selected3) {
      toast.error('Choose at least one sub category')
      return
    }
    toast.success(`${selected1} ${selected2} ${selected3}`)
    onClose()
  }

  return (
    <>
      {
        show &&
        <div
          className='multi-level-wrapper'
          style={show ? mountedStyle : unmountedStyle}
        >
          <div className="category-level-wrapper">
            <div className='category-level'>
              {
                level1?.map((item) => (
                  <div
                    key={item.title}
                    className={`multi-level-1 ${selected1 === item.url && 'selected'}`} 
                    onClick={() => {
                    level3 ? setLevel3([]) : ''
                    setSelected1(item.url)
                    setSelected2('')
                    setSelected3('')
                    item.submenu && setLevel2(item.submenu)
                  }}>
                    { item.title }
                  </div>
                ))
              }
          </div>
              
            {
              level2?.length ? (
                <div className="category-level">
                  {
                    level2?.map((item) => (
                      <div
                        key={item.title}
                        className={`multi-level-1 ${selected2 === item.url && 'selected'}`}
                        onClick={() => {
                        level3 ? setLevel3([]) : ''
                        setSelected2(item.url)
                        setSelected3('')
                        item.submenu && setLevel3(item.submenu)
                      }}>
                        { item.title }
                      </div>
                    ))
                  }
                </div>
              )
              :
              <></>
            }

            { level3?.length ? (
              <div className="category-level-3">
                {
                  level3?.map((item) => (
                    <div key={item.title} className={`multi-level-1 ${selected3 === item.url && 'selected'}`}  onClick={() => {
                      setSelected3(item.url)
                    }}>
                      { item.title }
                    </div>
                  ))
                }
              </div>
            )
            :
            <></>
            }
          </div>

          <div className='multi-level-submit'>
            <Button
              label='Select Category'
              onClick={submitSelected}
              size='full'
            />
          </div>
        </div>
      }
    </>
  )
}

export default index