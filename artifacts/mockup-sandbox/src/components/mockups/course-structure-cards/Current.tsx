import {
  BookOpen,
  Check,
  ChevronLeft,
  FileText,
  GripVertical,
  Layers3,
  Pencil,
  Radio,
  Trash2,
} from 'lucide-react';
import './_group.css';

export function Current() {
  return (
    <main className="mockup-current" dir="rtl">
      <div className="mockup-card-width">
        <article className="panel course-list-card">
          <div className="course-list-main">
            <div className="course-list-mark">
              <BookOpen size={24} aria-hidden="true" />
            </div>
            <div className="course-list-copy">
              <div className="course-list-title-row">
                <h2>اللغة الإنجليزية للمستوى التمهيدي</h2>
                <span className="course-status">
                  <Check size={14} aria-hidden="true" />
                  منشورة
                </span>
              </div>
              <div className="course-card-stats" role="group" aria-label="ملخص الدورة">
                <span><Layers3 size={15} aria-hidden="true" /> ٤ مستويات</span>
                <span><FileText size={15} aria-hidden="true" /> ٢٨ مادة تعليمية</span>
              </div>
            </div>
          </div>
          <div className="course-list-footer">
            <button type="button" className="course-open-action">
              فتح البناء <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <div className="course-list-tools course-card-actions" role="group" aria-label="إجراءات الدورة">
              <button className="course-tool publish-action" type="button" aria-label="إيقاف النشر" title="إيقاف النشر">
                <Radio size={17} aria-hidden="true" />
              </button>
              <button className="course-tool" type="button" aria-label="تعديل اسم الدورة" title="تعديل اسم الدورة">
                <Pencil size={16} aria-hidden="true" />
              </button>
              <button className="course-tool delete-action" type="button" aria-label="حذف الدورة" title="حذف الدورة">
                <Trash2 size={16} aria-hidden="true" />
              </button>
              <button className="course-tool drag-handle" type="button" aria-label="اسحب لإعادة الترتيب" title="إعادة الترتيب">
                <GripVertical size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
