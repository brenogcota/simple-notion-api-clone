import { Router } from 'express'
import { baseURL } from './config/constants'
import prisma from './db/prisma'
import { slugfy } from './utils/slugfy'

const router = Router()

router.get('/page', async (req, res) => {
    const pages = await prisma.page.findMany()
    res.json({ pages })
  })
  
router.post('/page', async (req, res) => {
    const { name } = req.body
    const url = `${baseURL}/page/slug/${slugfy(name)}`
    const page = await prisma.page.create({
      data: {
        name,
        url
      }
    })
    res.json(page)
})

router.get('/page/:id', async (req, res) => {
    const { id } = req.params
    const page = await prisma.page.findUnique({
        where: {
            id
        }
    })

    res.json(page)
})

router.get('/page/slug/:slug', async (req, res) => {
    const { slug } = req.params
    const page = await prisma.page.findFirst({
        where: {
            url: `${baseURL}/page/slug/${slug}`
        }
    })

    res.json(page)
})

router.put('/page/:id', async (req, res) => {
    const { id } = req.params
    const { children, ...rest } = req.body
    const page = await prisma.page.update({
        data: {
            children,
            ...rest,
        },
        where: {
            id
        }
    })

    res.json(page)
})

router.delete('/page/:id', async (req, res) => {
    const { id } = req.params
    const page = await prisma.page.delete({
        where: {
            id
        }
    })

    res.json(page)
})

export default router