import express from 'express'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { UserRoutes } from '../modules/user/user.route'
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route'
import { StudentRoutes } from '../modules/student/student.route'
import { FacultyRoutes } from '../modules/faculty/faculty.route'
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route'
import { AdminRoutes } from '../modules/admin/admin.route'
const router = express.Router()

const moduleRouter = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/management-department',
    route: ManagementDepartmentRoutes,
  },
]

moduleRouter.forEach(route => router.use(route.path, route.route))

export default router
