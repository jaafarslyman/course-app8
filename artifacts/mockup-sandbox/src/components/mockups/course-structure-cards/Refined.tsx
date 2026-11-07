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
import './Refined.css';

export function Refined() {
  return (
    <main className="mockup-refined" dir="rtl">
      <div className="mockup-card-width">
        <article className="refined-card">
          <div className="refined-main">
            <div className="refined-mark">
              <BookOpen size={25} strokeWidth={1.9} aria-hidden="true" />
            </div>
            <div className="refined-copy">
              <div className="refined-heading">
                <div className="refined-title">
                  <p className="refined-kicker">دورة تعليمية</p>
                  <h2>اللغة الإنجليزية للمستوى التمهيدي</h2>
                </div>
                <span className="refined-status">
                  <Check size={14} aria-hidden="true" />
                  منشورة
                </span>
              </div>
              <div className="refined-stats" role="group" aria-label="ملخص الدورة">
                <div className="refined-stat">
                  <span className="refined-stat-icon"><Layers3 size={17} aria-hidden="true" /></span>
                  <span className="refined-stat-copy"><strong>٤</strong><span>مستويات</span></span>
                </div>
                <div className="refined-stat">
                  <span className="refined-stat-icon"><FileText size={17} aria-hidden="true" /></span>
                  <span className="refined-stat-copy"><strong>٢٨</strong><span>مادة تعليمية</span></span>
                </div>
              </div>
            </div>
          </div>
          <footer className="refined-footer">
            <button type="button" className="refined-open">
              فتح البناء <ChevronLeft size={17} aria-hidden="true" />
            </button>
            <div className="refined-actions" role="group" aria-label="إجراءات الدورة">
              <button className="refined-tool is-published" type="button" aria-label="إيقاف النشر" title="إيقاف النشر">
                <Radio size={17} aria-hidden="true" />
              </button>
              <button className="refined-tool" type="button" aria-label="تعديل اسم الدورة" title="تعديل اسم الدورة">
                <Pencil size={16} aria-hidden="true" />
              </button>
              <button className="refined-tool is-destructive" type="button" aria-label="حذف الدورة" title="حذف الدورة">
                <Trash2 size={16} aria-hidden="true" />
              </button>
              <button className="refined-tool is-drag" type="button" aria-label="اسحب لإعادة الترتيب" title="إعادة الترتيب">
                <GripVertical size={16} aria-hidden="true" />
              </button>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
