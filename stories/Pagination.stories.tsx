import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Pagination } from '../src/components/pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const totalItems = 95
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
    
    return (
      <div className="w-full max-w-4xl">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          startIndex={startIndex}
          endIndex={endIndex}
          hasNextPage={currentPage < totalPages}
          hasPreviousPage={currentPage > 1}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={(newItemsPerPage) => {
            setItemsPerPage(newItemsPerPage)
            setCurrentPage(1) // Reset to first page when changing items per page
          }}
        />
      </div>
    )
  },
}

export const ManyPages: Story = {
  args: {} as any,
  render: () => {
    const [currentPage, setCurrentPage] = useState(15)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const totalItems = 1000
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
    
    return (
      <div className="w-full max-w-4xl">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          startIndex={startIndex}
          endIndex={endIndex}
          hasNextPage={currentPage < totalPages}
          hasPreviousPage={currentPage > 1}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={(newItemsPerPage) => {
            setItemsPerPage(newItemsPerPage)
            setCurrentPage(1)
          }}
        />
      </div>
    )
  },
}

export const WithoutItemsPerPage: Story = {
  args: {} as any,
  render: () => {
    const [currentPage, setCurrentPage] = useState(3)
    const itemsPerPage = 10
    const totalItems = 47
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
    
    return (
      <div className="w-full max-w-4xl">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          startIndex={startIndex}
          endIndex={endIndex}
          hasNextPage={currentPage < totalPages}
          hasPreviousPage={currentPage > 1}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={() => {}}
          showItemsPerPage={false}
        />
      </div>
    )
  },
}

export const WithoutPageInfo: Story = {
  args: {} as any,
  render: () => {
    const [currentPage, setCurrentPage] = useState(2)
    const [itemsPerPage, setItemsPerPage] = useState(20)
    const totalItems = 84
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
    
    return (
      <div className="w-full max-w-4xl">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          startIndex={startIndex}
          endIndex={endIndex}
          hasNextPage={currentPage < totalPages}
          hasPreviousPage={currentPage > 1}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
          showPageInfo={false}
        />
      </div>
    )
  },
}
